import { CustomCommand } from 'vtex'
import appsAdd from '../modules/add'

export default class Add extends CustomCommand {
  static description = 'Adds the specified app(s) to the manifest\'s dependencies.'

  static examples = ['vtex add vtex.service-example@0.x']

  static flags = {
    ...CustomCommand.globalFlags,
  }

  static strict = false

  static args = [
    { name: 'appId', required: true, description: 'Name and version (`{vendor}.{appname}@{x.x.x}`) of the dependency to include in the manifest.json file.' },
    { name: 'ithAppId', required: false, multiple: true, description: 'Names and versions (`{vendor}.{appname}@{x.x.x}`) of the multiple dependencies to include in the manifest.json file.' },
  ]

  async run() {
    const { raw } = this.parse(Add)
    const args = this.getAllArgs(raw)

    await appsAdd(args)
  }
}
