import { ActionCard } from "./action-card"
import useTranslation from 'next-translate/useTranslation'

export default function RightColumn(props:any) {
    const { t, lang } = useTranslation('progress')

    return (
        <div> 
            <ActionCard 
                title={t('h_firm_information_title')}
                description={t('p_firm_information_body')}
                link="dashboard" 
                index={1}
                progress={1} />
                <br/>
            <ActionCard 
                title={t('h_pa_title')}
                description={t('p_pa_body')}
                link="dashboard" 
                index={2}
                progress={.1} />
                <br/>
            <ActionCard 
                title={t('h_phone_title')}
                description={t('p_phone_body')}
                link="dashboard" 
                index={3}
                progress={.2} /> 
                <br/>
            <ActionCard 
                title={t('h_firm_branding_title')}
                description={t('p_firm_branding_body')}
                link="dashboard" 
                index={4}
                progress={0} />                                 
        </div>

    )
}