# VTEX CLI Plugin Add

Extend the `vtex` toolbelt!

## Developing

1. Clone `vtex/toolbelt` and follow the steps on the Contributing section.
2. Clone/Create a plugin with this template.
3. Change the template name under this project's `package.json`.
2. Run `yarn link` on this project.
3. Now run `vtex link @vtex/cli-plugin-add` (or the new name) on the `vtex/toolbelt` project.
4. Run `yarn watch` on the `vtex/toolbelt`
5. Test the command on a VTEX IO app with `vtex-test hello`

For more information, read [Ocliff Docs](https://oclif.io/docs/introduction).

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
![npm](https://img.shields.io/npm/v/@vtex/cli-plugin-add)

<!-- toc -->
* [VTEX CLI Plugin Add](#vtex-cli-plugin-add)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @vtex/cli-plugin-add
$ vtex COMMAND
running command...
$ vtex (-v|--version|version)
@vtex/cli-plugin-add/0.1.2 linux-x64 node-v12.22.12
$ vtex --help [COMMAND]
USAGE
  $ vtex COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`vtex add APPID [ITHAPPID]`](#vtex-add-appid-ithappid)

## `vtex add APPID [ITHAPPID]`

Adds the specified app(s) to the manifest's dependencies.

```
USAGE
  $ vtex add APPID [ITHAPPID]

ARGUMENTS
  APPID     Name and version (`{vendor}.{appname}@{x.x.x}`) of the dependency to include in the manifest.json file.

  ITHAPPID  Names and versions (`{vendor}.{appname}@{x.x.x}`) of the multiple dependencies to include in the
            manifest.json file.

OPTIONS
  -h, --help     show CLI help
  -v, --verbose  Show debug level logs
  --trace        Ensure all requests to VTEX IO are traced

EXAMPLE
  vtex add vtex.service-example@0.x
```

_See code: [build/commands/add.ts](https://github.com/vtex/cli-plugin-template/blob/v0.1.2/build/commands/add.ts)_
<!-- commandsstop -->
