"use client"
import { createContext, useContext, useState } from "react";


export const Context = createContext({
    language: "vi",
    setLanguage: function(value:any){
        return value
    }
})