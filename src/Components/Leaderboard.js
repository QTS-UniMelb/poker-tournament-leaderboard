import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import readXlsxFile from "read-excel-file";

import { motion } from "framer-motion";

const container = {
    hidden: { x: "-100vw" },
    show: {
        x: 0,
        transition: {
            staggerChildren: 1,
        },
    },
};

export const Leaderboard = ({
    filename,
    participants_per_page,
    handleNextFile,
}) => {
    const [table, setTable] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [leaderBoardSection, setLeaderBoardSection] = React.useState(-1);

    React.useEffect(() => {
        const fileHandler = () => {
            fetch(filename)
                .then((response) => response.blob())
                .then((blob) => readXlsxFile(blob))
                .then((data) => {
                    createData(data);
                });
        };

        fileHandler();
        // eslint-disable-next-line
    }, [filename]);

    React.useEffect(() => {
        if (!table) return;

        const updateSection = () => {
            if (
                (leaderBoardSection + 1) * participants_per_page >
                table.rows.length
            ) {
                setLeaderBoardSection(0);
                handleNextFile();
            } else {
                setLeaderBoardSection(leaderBoardSection + 1);
            }
        };

        const interval = setInterval(() => {
            updateSection();
        }, 5 * 1000);

        return () => clearInterval(interval);
        // eslint-disable-next-line
    }, [leaderBoardSection]);

    const createData = (data) => {
        setTable({ header: data[0], rows: data.slice(1, data.length) });
        setLoading(false);
        setLeaderBoardSection(0);
    };

    return (
        <div>
            {!loading && (
                <TableContainer
                    component={Paper}
                    style={{
                        maxHeight: "75vh",
                        maxWidth: "60vw",
                        minWidth: "60vw",
                    }}
                >
                    <Table
                        aria-label="simple table"
                        sx={{ backgroundColor: "#101C43" }}
                    >
                        <TableHead>
                            <TableRow
                                sx={{
                                    backgroundColor: "#31a4ce",
                                }}
                            >
                                {table.header.map((value, index) => (
                                    <TableCell
                                        key={`header-${index}`}
                                        sx={{
                                            color: "#F8FEFF",
                                            fontSize: "1.1rem",
                                        }}
                                    >
                                        {value}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {table.rows
                                .slice(
                                    participants_per_page * leaderBoardSection,
                                    participants_per_page * leaderBoardSection +
                                        participants_per_page
                                )
                                .map((row, rowNumber) => (
                                    <TableRow
                                        key={`row-${row[0]}`}
                                        sx={{
                                            "&:last-child td, &:last-child th":
                                                {
                                                    border: 0,
                                                },
                                            backgroundColor: "#040b24",
                                            opacity:
                                                row[0] <= 8 ? "90%" : "100%",
                                        }}
                                        component={motion.tr}
                                        initial={{
                                            opacity: 0,
                                            translateY: "20%",
                                        }}
                                        animate={{ opacity: 1, translateY: 0 }}
                                        transition={{
                                            ease: "easeIn",
                                            duration: 1,
                                            delay: 0.2 * (rowNumber - 1),
                                        }}
                                        exit={{
                                            x: "100vw",
                                            transition: {
                                                ease: "easeIn",
                                                duration: 0.2,
                                            },
                                        }}
                                    >
                                        {row.map((value, columnNumber) => (
                                            <TableCell
                                                key={`cell-${rowNumber}${columnNumber}`}
                                                component="th"
                                                scope="row"
                                                sx={{
                                                    color: "#F8FEFF",
                                                    fontSize: "1.1rem",
                                                }}
                                            >
                                                {value}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </div>
    );
};
