const
    processJob = require('../job');

exports.command = 'split <files..>';
exports.desc = 'Split a PDF into one PDF file per page';
exports.builder = (yargs) => {

    return yargs
        .positional('files', {
            description: 'Paths to files to split'
        })
        .example('cloudconvert split file1.pdf file2.pdf')
        .example('cloudconvert split --outputdir output/ directory/*')
        .help()
        .hide('version')


};
exports.handler = async (argv) => {

    if (argv.files.length === 0) {
        throw new Error('You need to provide at least one file!');
    }

    await processJob(argv, {
        'operation': 'split',
        ...argv.parameter
    })


}
