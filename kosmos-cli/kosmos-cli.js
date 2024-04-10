#!/usr/bin/env node
const { exec } = require('child_process');
const fs = require('fs').promises;

// const execAsync = promisify(exec);
const args = process.argv;
const schema = args[2];
const elementName = args[3];

console.log(`nest generate ${schema} ${elementName}`);

const excecGenerateSubAppCmd = (command, name) => {
    return new Promise(async(resolve, reject) => {
        await exec(command, async (error, stdout, stderr) => {
            if(error) {
                reject(stderr);
            }
            let content = await fs.readFile('./kosmos-cli/templates/tsconfig.app.template.json', 'utf8');
            content = JSON.parse(content);

            content.compilerOptions.outDir = `../../dist/apps/${name}`;
            await fs.writeFile(`apps/${name}/tsconfig.app.json`, JSON.stringify(content, null, 4), 'utf8');
            resolve(stdout);
        });
    });
}

const execCmd = (command, name) => {
    return new Promise(async (resolve, reject) => {
        exec(command, async (error, stdout, stderr) => {
            if(error) {
                reject(stderr);
            } else {
                resolve(stdout);
            }
        });
    })
}

const updateAbsPath = (name) => {
    const files = [
        `apps/${elementName}/src/main.ts`,
        `apps/${elementName}/src/${elementName}.controller.ts`,
        `apps/${elementName}/src/${elementName}.controller.spec.ts`,
        `apps/${elementName}/src/${elementName}.module.ts`,
    ];
    return new Promise(async (resolve, reject) => {
        await files.map(async(file) => {
            var content = await fs.readFile(file, 'utf8');
            var regex = new RegExp(`\.\/${name}.module`, 'mg');
    
            content = content.replace(regex, `@kosmos/${name}.module`);
    
            regex = new RegExp(`\.\/${name}.controller`, 'mg');
            content = content.replace(regex, `@kosmos/${name}.controller`);
            
            regex = new RegExp(`\.\/${name}.service`, 'mg');
            content = content.replace(regex, `@kosmos/${name}.service`);
            
            await fs.writeFile(file, content, 'utf8');
        });
        resolve();
    });
}

const moveFiles = (elementName) => {
    const actions = [
        `mv apps/${elementName}/src/${elementName}.controller.ts apps/${elementName}/src/controllers/${elementName}.controller.ts`,
        `mv apps/${elementName}/src/${elementName}.controller.spec.ts apps/${elementName}/src/controllers/${elementName}.controller.spec.ts`,
        `mv apps/${elementName}/src/${elementName}.service.ts apps/${elementName}/src/application/services/${elementName}.service.ts`
    ];
    return new Promise(async (resolve, reject) => {
        await actions.map(async (action) => {
            await execCmd(action);
        });
        resolve();
    });
}

const subAppCmd = `nest generate sub-app ${elementName} && npm run generate:scaffold --name=${elementName}`;
const copyTsConfigFileCmd = `cp ./kosmos-cli/templates/tsconfig.template.json apps/${elementName}/tsconfig.json`;

async function run() {
    try {
        await excecGenerateSubAppCmd(subAppCmd, elementName);
        await updateAbsPath(elementName);
        await execCmd(copyTsConfigFileCmd, elementName);
        await moveFiles(elementName);
    } catch (error) {
        console.log('error: ', error);
    }
}

run();
