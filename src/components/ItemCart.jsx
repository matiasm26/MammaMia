import { Table, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { PizzaContext } from '../contexts/PizzaContext';

export default function ItemCart() {
const { cart, decreaseItemCount, increaseItemCount, totalCartAmount, formatCurrency } =
useContext(PizzaContext);

return (
    <>
    <Table responsive>
    <tbody>
        {cart.map((pizza, index) => (
            <tr key={index} className="scroll-container">
            <td>
            <img src={pizza.img} alt={pizza.name} />
            </td>
            <td className="w-75 text-capitalize">{pizza.name}</td>
            <td>
                <Button onClick={() => decreaseItemCount(index)}>-</Button>
            </td>
            <td>{pizza.count}</td>
            <td>
                <Button onClick={() => increaseItemCount(index)}>+</Button>
            </td>
            <td>=</td>
            <td>{formatCurrency(pizza.count * pizza.price)}</td>
            </tr>
            ))}
    </tbody>
    <tfoot>
            <tr className="text-center">
            <td colSpan="5" className="fw-bold">
            Total
            </td>
            <td>=</td>
            <td className="fw-bold">{formatCurrency(totalCartAmount)}</td>
            </tr>
    </tfoot>
    </Table>
    <Button>Pay</Button>
    </>
);
}
