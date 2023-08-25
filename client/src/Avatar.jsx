export default function Avatar({userId, username, online}) {

    const colors = ['bg-teal-200', 'bg-red-200', 'bg-purple-200', 'bg-blue-200', 'bg-yellow-200', 'bg-green-200', 'bg-orange-200', 'bg-rose-200', 'bg-pink-200', 'bg-red-200', 'bg-amber-200', 'bg-lime-200', 'bg-cyan-200', 'bg-indigo-200', 'bg-violet-200'];

    const userIdBase12 = parseInt(userId.substring(12), 16);
    const colorIndex = userIdBase12 % colors.length;
    const color = colors[colorIndex];
    // console.log(color);
   return (
    <div className={"w-8 h-8 relative bg-teal-200 rounded-full flex items-center "+color}>
       <div className="text-center w-full opacity-70">{username[0]}</div> 
       {online && (
        <div className="absolute w-3 h-3 bg-green-400 bg-black bottom-0 right-0 rounded-full border border-white"></div>
       )}
       {!online && (
        <div className="absolute w-3 h-3 bg-gray-400 bg-black bottom-0 right-0 rounded-full border border-white"></div>
       )}
    </div>
   ); 
}