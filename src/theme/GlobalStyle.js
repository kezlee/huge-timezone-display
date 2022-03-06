import { createGlobalStyle } from "styled-components";
import { breakpoints } from '../theme/index';

const GlobalStyle = createGlobalStyle`

.hide {
    display: none;

    &--xsmd {
        @media ${breakpoints.xsmd} {
            display: none;
        }
    }

    &--xs {
        @media ${breakpoints.xs} {
            display: none;
        }
    }

    &--md {
        @media ${breakpoints.md} {
            display: none;
        }
    }

    &--lg {
        @media ${breakpoints.lg} {
            display: none;
        }
    }
}
`;

export default GlobalStyle;