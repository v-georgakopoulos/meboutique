import styled from "styled-components";
import {media} from "../../styles/media"

    export const SmallBannerContainer = styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        height:600px;

        @media ${media.md} {
             grid-template-columns: 1fr;
             height:unset;
        }
        @media ${media.sm} {
             grid-template-columns: 1fr;
             height:unset;
        }

    `