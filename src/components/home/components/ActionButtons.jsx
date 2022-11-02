import { Button } from "../styled-components/Button"
import { ButtonsContainer } from "../styled-components/ButtonsContainer"

export const ActionButtons = () => {
    return (
        <ButtonsContainer>
            <Button 
                background='#2E7D32'
                hoverColor='#2a692d;'
            >
                Save
            </Button>

            <Button 
                background='#00695C'
                hoverColor='#005a4f;'
                >
                Reopen
            </Button>

            <Button 
                background='#C62828'
                hoverColor='#b71c1c;'
                >
                Delete
            </Button>
        </ButtonsContainer>
    )
}
