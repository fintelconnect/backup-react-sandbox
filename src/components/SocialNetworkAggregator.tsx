import React, { FC } from "react";
import styled from "@emotion/styled";

export const Wrapper = styled.pre({
  display: "flex",
  alignItems: "center",
  width: "100%",
  borderRadius: 4,
  marginBottom: 8,
  padding: 16,
  background: "white",
  fontWeight: "400",
  fontSize: 14,
  cursor: "pointer",
});

export interface SocialNetworkAggregatorProps {
  output?: string;
}

export const SocialNetworkAggregator: FC<SocialNetworkAggregatorProps> = ({
  output = '{ twitter: [tweets], facebook: [statuses], instagram: [photos] }',
}) => {
  return (
    <Wrapper>
      {output}
    </Wrapper>
  );
};
  