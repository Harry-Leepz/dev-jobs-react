export type TJobItem = {
  id: number
  title: string
  badgeLetters: string
  company: string
  relevanceScore: number
  daysAgo: number
};

export type TJobDetails = {
  id: number
  description: string
  qualifications: string[]
  reviews: string[]
  title: string
  badgeLetters: string
  company: string
  duration: string
  salary: string
  location: string
  relevanceScore: number
  daysAgo: number
  coverImgURL: string
  companyURL: string
};