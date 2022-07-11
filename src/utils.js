import { format } from 'date-fns'
import cityCodeJson from './code.json'

export const cityList = Object.values(cityCodeJson).filter(
  (item) => item.iata && item.city
)

export const getDateForFlight = (date) => format(new Date(date), 'ddMMMyy')
