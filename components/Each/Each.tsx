import React, { Children } from 'react';

interface Props {
  of: any[];
  render: any;
}

export const Each = ({ render, of }: Props) =>
  Children.toArray(of.map((item: any, index: number) => render(item, index)));
