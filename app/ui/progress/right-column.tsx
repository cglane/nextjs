import { ActionCard } from "./action-card"
import useTranslation from 'next-translate/useTranslation'

export default function RightColumn(props:any) {
    const { t, lang } = useTranslation('progress')

    return (
        <div> 
            <ActionCard 
                title={t('firm_information')}
                description={t('firm_information_description')}
                link="dashboard" 
                progress={1} />
                <br/>
            <ActionCard 
                title={t('firm_information')}
                description={t('firm_information_description')}
                link="dashboard" 
                progress={.1} />
        </div>

    )
}