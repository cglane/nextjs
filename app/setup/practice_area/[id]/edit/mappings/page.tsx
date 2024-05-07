
import { notFound } from 'next/navigation';
import { fetchCaseType } from '@/app/lib/data';
import useTranslation from 'next-translate/useTranslation'
import { RemoveMapping, AddMapping } from '@/app/ui/setup/buttons';
import MappingForm from '@/app/ui/setup/practice_area/mapping_pa_view';
import { MainWrapper } from '@/app/ui/setup/basic_elements';

export default async function Page({ params }:  { params: { id: string } }) {
  const { t, lang } = useTranslation('setup')

    const id = params.id;
    let importNames: string[] = []
    const caseType = await fetchCaseType(id)
    /// Temporary
    const integration = "Filevine"
    // Annoyingly vercel postgres has bad support for list of strings
    // let stringVar:string = caseType.import_names as string
    importNames = JSON.parse(caseType.import_names.toString())
    
    return (
    <MainWrapper>      
      <MappingForm caseTypeName={caseType.name} description={t('p_description_integration_mapping', {integration:integration})}caseTypeId={caseType.id} importNames={importNames} mappedNameHeader={t('h2_mapping_instructions', {integration:integration})} unmappedNameHeader={t('h2_mapping_instructions_2', {integration:integration})}/>
    </MainWrapper>

  );
}