export = {}

// Перечисление с названием TypesOfMedia, которое включает строчные типы video, audio

// Перечисление с названием FormatsOfMedia, которое включает строчные видео-форматы: .mp4, .mov, .mkv, .flv, .webM

// Описание интерфейса, в котором:
// name - строка
// type - один из перечисления выше
// format = один из перечисления выше
// subtitles - необязательное поле типа строка
// marks - необязательное поле неизвестного типа

/*
  function playMedia(
    { name, type, format, subtitles, marks }: интерфейс = {
      name: "example",
      type: один из типов,
      format: один из форматов,
    }
  ): string {
    let marksLog;

    // Создать функционал, что если marks - это массив, то "сложить" все эелементы в одну строку и поместить в marksLog
    // Если это строка, то просто поместить её в marksLog
    // Если что-то другое - то marksLog = "Unsupported type of marks"
    // Не допускайте any!

    console.log(`Media ${name}${format} is ${type}
      Marks: ${marksLog}
      Subtitles: ${subtitles ?? "none"}`);
    // помните что это за оператор ??

    return "Media started";
  }
 */

// ---------------------------------------------------------------
// playMedia({
//   name: "WoW",
//   format: один из форматов,
//   type: один из типов,
//   subtitles: "hmhmhm hmhmhm doh",
//   marks: ["4:30", "5:40"],
// });
