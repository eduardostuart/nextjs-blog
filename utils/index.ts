export function config(key: string, defaultValue?: any) : any {
  const values: Record<string, string | number | boolean> = {
    pageTitle: process.env.pageTitle || ''
  }

  return values[key] || defaultValue
}
