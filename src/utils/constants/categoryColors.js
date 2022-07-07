export function getCategoryColorForTailwind(category) {
  switch (category) {
    case 'sport':
      return 'kiddoGreen';
    case 'culture':
      return 'kiddoSalmon';
    case 'manuel':
      return 'kiddoYellow';
    case 'art':
      return 'kiddoPurple';
    case 'eveil':
      return 'kiddoOrange';
    case 'autres':
      return 'kiddoBlue';
    default:
      return 'gray-200';
  }
}

export function getCategoryColorForCSS(category) {
  switch (category) {
    case 'sport':
      return '#3ac9bb';
    case 'culture':
      return '#fb9058';
    case 'manuel':
      return '#ffc20b';
    case 'art':
      return '#a59df1';
    case 'eveil':
      return '#fc664e';
    case 'autres':
      return '#41c6f0';
    default:
      return '#edebfc';
  }
}

// export default function getCategoryColor(category) {
//   switch (category) {
//     case 'sport':
//       return 'border-b-[28px] border-red-300';
//     case 'culture':
//       return 'border-b-[28px] border-purple-300';
//     case 'manuel':
//       return 'border-b-[28px] border-green-300';
//     case 'art':
//       return 'border-b-[28px] border-yellow-300';
//     case 'eveil':
//       return 'border-b-[28px] border-blue-300';
//     case 'autres':
//       return 'border-b-[28px] border-orange-300';
//     default:
//       return 'border-b-[28px] border-gray-300';
//   }
// }
