export = {}

// Перечисление с названием TypesOfMedia, которое включает строчные типы video, audio

enum TypesOfMedia {
  Video = 'video',
  Audio = 'audio',
}

// Перечисление с названием FormatsOfMedia, которое включает строчные видео-форматы: .mp4, .mov, .mkv, .flv, .webM


enum FormatsOfMedia {
  MP4 = '.mp4',
  MOV = '.mov',
  MKV = '.mkv',
  FLV = '.flv',
  WEBM = '.webm'
}

// Описание интерфейса, в котором:
// name - строка
// type - один из перечисления выше
// format = один из перечисления выше
// subtitles - необязательное поле типа строка
// marks - необязательное поле неизвестного типа

interface iMedia {
  name: string,
  type: TypesOfMedia,
  format: FormatsOfMedia,
  subtitles?: string,
  marks?: unknown, 
}

function playMedia(
  { name, type, format, subtitles, marks }: iMedia = {
    name: "example",
    type: TypesOfMedia.Video,
    format: FormatsOfMedia.MP4,
  }
): string {
  let marksLog;

  // Создать функционал, что если marks - это массив, то "сложить" все эелементы в одну строку и поместить в marksLog
  // Если это строка, то просто поместить её в marksLog
  // Если что-то другое - то marksLog = "Unsupported type of marks"
  // Не допускайте any!

  if(Array.isArray(marks)){
    marksLog = marks.join(' ')
  }else if(typeof marks === "string") {
    marksLog = marks
  }else {
    marksLog = "Unsupported type of marks"
  }

  console.log(`Media ${name}${format} is ${type}
    Marks: ${marksLog}
    Subtitles: ${subtitles ?? "none"}`);
  // помните что это за оператор ??

  return marksLog;
}


// Вывод сообщения 
const result = playMedia({
  name: "WoW",
  type: TypesOfMedia.Video,
  format: FormatsOfMedia.MP4,
  subtitles: "hmhmhm hmhmhm doh",
  marks: ["4:30", "5:40"],
});

console.log(result)


