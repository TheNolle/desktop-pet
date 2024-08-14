import { Notification } from 'electron'

let lastNotification: Notification | null = null

export const notify = (title: string, body: string, icon?: string) => {
  if (lastNotification) lastNotification.close()
  lastNotification = new Notification({ title, body, icon, urgency: 'critical' })
  lastNotification.show()
}
