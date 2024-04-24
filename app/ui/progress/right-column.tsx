import { ActionCard } from "./action-card"
export default function RightColumn(props:any) {
    return (
        <div> 
                  <ActionCard title="Firm Information" description="Add the firm name, address and other basic information about your firm." link="dashboard" progress={1} type="collected" />
        
        </div>

    )
}