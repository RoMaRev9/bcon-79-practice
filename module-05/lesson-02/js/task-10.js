// Напиши клас Notes, який керує колекцієї заміток у властивості items
// Замітка - це об"єкт із властивостями text та priority
// Додай класу статичну властивість PRIORITY,
//     в якому буде зберігатися об"єкт з пріоритетами
//     Додай методи addNote(note), removeNote(text), updatePriority(text, newPriority)

const note1 = new Notes()

note1.addNote({ text: 'Note1', priority: Notes.PRIORITY.LOW })
note1.addNote({ text: 'Note2', priority: Notes.PRIORITY.LOW })
note1.addNote({ text: 'Note3', priority: Notes.PRIORITY.LOW })
note1.removeNote('Note1')
note1.updatePriority('Note2', Notes.PRIORITY.HIGHT)
console.log(note1.items)
