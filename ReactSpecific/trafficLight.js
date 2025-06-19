export default function App() {
    const [color , setColor] = useState('red')
    const colorArr = ['red', 'yellow', 'green']

   useEffect(()=>{

 
     const interval  = setInterval(()=>{
         setColor((prev)=>{
             const nextIndex = (colorArr.indexOf(prev) + 1) % colorArr.length
             console.log(nextIndex)
           return  colorArr[nextIndex]
         })
                 
         
     },2000)
       return () => clearInterval(interval); // cleanup
   },[])

    
  return (
      <div>
          <hi>
            Traffic Light
          </hi>

         
<div style={{paddingTop: 20}}>
       <div style={{height: '20px', width: '20px', backgroundColor: color ==='red' ? color : 'black', borderRadius: '50px', marginBottom: 20}}></div>
             <div style={{height: '20px', width: '20px', backgroundColor: color ==='yellow' ? color : 'black', borderRadius: '50px',  marginBottom: 20}}></div>
             <div style={{height: '20px', width: '20px', backgroundColor: color ==='green' ? color : 'black', borderRadius: '50px'}}></div>
          </div>
      </div>
  )
}