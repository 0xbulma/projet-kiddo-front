export default function getCategoryColor(category) {
  switch (category) {
    case 'sport':
      return 'border-b-[28px] border-red-300';
    case 'culture':
      return 'border-b-[28px] border-purple-300';
    case 'manuel':
      return 'border-b-[28px] border-green-300';
    case 'art':
      return 'border-b-[28px] border-yellow-300';
    case 'eveil':
      return 'border-b-[28px] border-blue-300';
    case 'autres':
      return 'border-b-[28px] border-orange-300';
    default:
      return 'border-b-[28px] border-gray-300';
  }
}

//  border-bottom: 29px solid red;
//border-b-[28px]

// export default function getCategoryColor(category) {
//   switch (category) {
//     case "sport":
//       return "bg-red-300";
//     case "culture":
//       return "bg-purple-300";
//     case "manuel":
//       return "bg-green-300";
//     case "art":
//       return "bg-yellow-300";
//     case "eveil":
//       return "bg-blue-300";
//     case "autres":
//       return "bg-orange-300";
//     default:
//       return "bg-gray-300";
//   }
// }
