export const TableRow = (props) => {
    return (
        <tr>
            <td>{props.tableItem.name}</td>
            <td>{props.tableItem.chain}</td>
            <td>{props.tableItem.chainId}</td>
            <td>{props.tableItem.networkId}</td>
        </tr>

    )
}