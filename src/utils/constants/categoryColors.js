export default function getCategoryColor(category) {
  switch (category) {
    case "sport":
      return "bg-red-300";
    case "culture":
      return "bg-purple-300";
    case "manuel":
      return "bg-green-300";
    case "art":
      return "bg-yellow-300";
    case "eveil":
      return "bg-blue-300";
    case "autres":
      return "bg-orange-300";
    default:
      return "bg-gray-300";
  }
}
