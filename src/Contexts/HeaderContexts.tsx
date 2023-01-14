import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import {createContext, useContext, useEffect} from 'react';

interface HeaderContextProps{
    children: React.ReactNode;
}

type ContextProps = {
    isSlugPage: boolean;
}



const HeaderPageContext = createContext({} as ContextProps);

export function HeaderContext({children}: HeaderContextProps){
    const router = useRouter()

    const contextData = {
        isSlugPage: router.asPath !== "/" ? true : false,
    }
    
    return(
        <HeaderPageContext.Provider  value={contextData}>
            {children}
        </HeaderPageContext.Provider>
    )
}

export const useHeaderContext = () => useContext(HeaderPageContext)