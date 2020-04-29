import httpClient from '../utils/HttpClient'
import { AssetUpload } from '../models/AssetUpload'
import { Asset } from '../models/Asset'
import { RequiredDeep } from '../models/RequiredDeep'

export default class Auth {
  constructor() {
    this.Upload = this.Upload.bind(this)
  }

  async Upload(
    containerID: string,
    asset: AssetUpload,
    accessToken?: string
  ): Promise<RequiredDeep<Asset>> {
    asset.Tags = asset.Tags.join(",") as any;
    const form = new FormData()
    for (const prop in asset) {
      if (asset.hasOwnProperty(prop)) {
        form.append(prop, asset[prop])
      }
    }
    const url = `/containers/${containerID}/assets`
    return await httpClient.post(url, form, { params: { accessToken } })
  }
}
