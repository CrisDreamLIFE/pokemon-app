import { Card, Text, Row } from "@nextui-org/react";

export function PokemonCard ({ pokemon }) {
  return (
    <Card hoverable clickable>
      <Card.Body>
        <img src={pokemon.image} alt={pokemon.name} />
      </Card.Body>
      <Card.Footer>
        <Row justify="space-between">
          <Text b>{pokemon.name}</Text>
          <Text>{pokemon.types.join(', ')}</Text>
        </Row>
      </Card.Footer>
    </Card>
  );
};
