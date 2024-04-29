"use client"

import useTranslation from 'next-translate/useTranslation'
import { useStageStore } from "@/stores/stage";
import React, { useState, useEffect } from 'react';

export default function LeftColumn(props:any) {
  // https://stackoverflow.com/questions/66374123/warning-text-content-did-not-match-server-im-out-client-im-in-div
    const { t, lang } = useTranslation('progress')
    
      const {replace} = useStageStore();


 
    const handleClickListener = () => {
      replace({"title": "hello", "index": 2})

    };

    return (
        <div> 
          <button onClick={handleClickListener}>
          Change State {t('h_need_help_title')}
      </button>       
        </div>

    )
}