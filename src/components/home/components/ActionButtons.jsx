import { Button } from "../styled-components/Button"
import { ButtonsContainer } from "../styled-components/ButtonsContainer"

export const ActionButtons = () => {
    return (
        <ButtonsContainer>
            <Button>
                Save
            </Button>

            <Button>
                Reopen
            </Button>

            <Button>
                Delete
            </Button>
        </ButtonsContainer>
    )
}
