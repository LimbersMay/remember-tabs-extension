import { useContext } from 'react';
import * as S from '../styled-components';
import { TabContext } from './context/TabContext';

export const MainButtons = () => {

    const { handleSetTabs, handleOpenTabs, handleDeleteTabs } = useContext(TabContext);

    return (
        <S.MainButtons>
            <S.MainButton 
                background='#2E7D32'
                hoverColor='#2a692d'
                onClick={ handleSetTabs }
            >
                Save
            </S.MainButton>

            <S.MainButton 
                background='#00695C'
                hoverColor='#005a4f'
                onClick={ handleOpenTabs }
                >
                Reopen
            </S.MainButton>

            <S.MainButton 
                background='#C62828'
                hoverColor='#b71c1c'
                onClick={ handleDeleteTabs }
                >
                Delete
            </S.MainButton>
        </S.MainButtons>
    )
}
