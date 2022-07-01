export default function getCategoryColor(category) {
  switch (category) {
    case "sport":
      return "red";
    case "culture":
      return "purple";
    case "manuel":
      return "green";
    case "art":
      return "yellow";
    case "eveil":
      return "blue";
    case "autres":
      return "orange";
    default:
      return "gray";
  }
}
