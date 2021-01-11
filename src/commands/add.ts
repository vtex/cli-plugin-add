import { CustomCommand } from 'vtex'
import appsAdd from '../modules/add'

export default class Add extends CustomCommand {
  static description = 'Add app(s) to the manifest dependencies'

  static examples = ['vtex add vtex.service-example@0.x']

  static flags = {
    ...CustomCommand.globalFlags,
  }

  static strict = false

  static args = [
    { name: 'appId', required: true },
    { name: 'ithAppId', required: false, multiple: true },
  ]

  async run() {
    const { raw } = this.parse(Add)
    const args = this.getAllArgs(raw)

    await appsAdd(args)
  }
}
