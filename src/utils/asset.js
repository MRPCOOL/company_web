const BASE_URL = import.meta.env.BASE_URL.replace(/\/?$/, '/')

export function toAsset(path = '') {
  if (!path) return path

  const value = String(path)
  if (/^(https?:)?\/\//.test(value) || value.startsWith('data:') || value.startsWith('blob:')) {
    return value
  }

  return `${BASE_URL}${value.replace(/^\/+/, '')}`
}

export function toCssUrl(path = '') {
  const url = toAsset(path)
  return url ? `url(${url})` : ''
}

