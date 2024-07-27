export default function formatFirstWordToUpperCase(name: string) {
    if (!name) {
      return null;
    }
    const formattedName = name[0].toUpperCase();
    
    return formattedName + name.substring(1); 
}