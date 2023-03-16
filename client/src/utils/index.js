import { surpriseMePromts } from '../constants'
import FileSaver from 'file-saver'

export function getRandomPrompt(prompt) {
  const RandomIndex = Math.floor(Math.random()*
  surpriseMePromts.length);

  const randomPrompt = surpriseMePromts[RandomIndex]

  if(randomPrompt === prompt) return getRandomPrompt(prompt)
  
  return randomPrompt
}

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`)
}
