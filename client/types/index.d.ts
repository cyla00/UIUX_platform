export { alertMessage };

declare global {
  interface alertMessage {
      type: string
      value: string
  }
}