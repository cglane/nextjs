"use client"

  export default function StatusCheckBar(props:any) {
    return (
      <div className="flex items-center">
        {
          props.stages.map((stage: number)=> {
            
            if(stage < props.currentIndex){
              return (
                <div key={stage} className="w-3 h-3 bg-green-500 rounded-full flex justify-center items-center text-white font-bold mx-3">
                ✓
              </div>
              )
   
            }else if(stage == props.currentIndex){
              return (
                <div key={stage} className="w-3 h-3 bg-blue-400 rounded-full flex justify-center items-center mx-3 border-2 border-blue-300">
                </div>
              )

            }else {
              return (
                <div key={stage}className="w-3 h-3 bg-gray-300 rounded-full mx-3"></div>

              )
            }
          })
        }
      </div>
    );
  };
  
