import { Button, Container, InputBase, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles((theme) => ({
    detailButton: {
        color: "#24a8d8",
    }

}))

function Data(id, image, fullName, birthYear, age, phone, address){
    return {id, image, fullName, birthYear, phone, address}
}

const rows = [
    Data(1, ' ', 'Loc', 1998, '098xxxx', 'TP.HCM'),
    Data(2, ' ', 'Huy', 2001, '098xxxx', 'TP.HCM'),
    Data(3, ' ', 'Thoai', 2001, '098xxxx', 'TP.HCM'),
    Data(4, ' ','Huynh', 2000, '098xxxx', 'TP.HCM'),
    Data(5, ' ','Chi', 1999, '098xxxx', 'TP.HCM'),

]

function User() {

    const classes = useStyles()

    return (
        <div>
            <Container fixed>
                <Typography variant="h5"> Quản lý người dùng </Typography>

                <InputBase 
                    placeholder='Search...'
                />
                <Button variant='contained' color="primary">Tìm kiếm</Button>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                        <TableCell>STT</TableCell>
                        <TableCell>Ảnh đại diện</TableCell>
                        <TableCell>Họ và tên</TableCell>
                        <TableCell>Năm sinh</TableCell>
                        <TableCell>Chi tiết</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.image}</TableCell>
                            <TableCell>{row.fullName}</TableCell>
                            <TableCell>{row.birthYear}</TableCell>
                            <TableCell>
                                <Button className={classes.detailButton}>Xem chi tiết</Button>
                            </TableCell>
                        </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </Container>
        </div>
    )
}

export default User
