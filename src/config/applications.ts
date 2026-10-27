type Application = {
  id: string
  name: string
  url: string
  description?: string
}

export const applications: Application[] = [
  {
    id: 'gng',
    name: 'GNG APP',
    url: 'https://hdr-gng-app-testing.azurewebsites.net/',
  },
  {
    id: 'fee',
    name: 'FEE APP',
    url: 'https://fee.example.com',
  },
] as const