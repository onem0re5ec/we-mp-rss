import type { MpItem } from './subscription'

export interface MessageTask {
  id: number
  name: string
  message_type: number
  message_template: string
  web_hook_url: string
  mps_id: string // JSON字符串，解析后为 MpItem[]
  status: number
  cron_exp: string
  created_at: string
  updated_at: string
}

export interface MessageTaskCreate {
  name: string
  message_type: number
  message_template: string
  web_hook_url: string
  mps_id: MpItem[]
  status: number
  cron_exp: string
}

export interface MessageTaskUpdate {
  name?: string
  message_type?: number
  message_template?: string
  web_hook_url?: string
  mps_id?: MpItem[]
  status?: number
  cron_exp?: string
}