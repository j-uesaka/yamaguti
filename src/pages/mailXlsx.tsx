import { generateClient } from 'aws-amplify/api';
import { useEffect, useRef, useState } from 'react'
import * as XLSX from 'xlsx';
import { listMailTos } from '../graphql/queries';
import { MailTo } from '../API';
import { createMailTo } from '../graphql/mutations';
import { utils, write } from 'xlsx';

type excelData = {
    company_name: string
    destination_name: string
    mail_address: string
}

const MailXlsx = () => {
    const fileInput = useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = useState('');
    const [excelData, setExcelData] = useState<excelData[]>([]);
    const [bps, setBps] = useState<MailTo[]>([]);
    const client = generateClient()

    useEffect(() => {
        geter()
    }, [])

    const geter = async () => {
        const getBps = await client.graphql({ query: listMailTos })
        setBps(getBps.data.listMailTos.items)
    }

    const handleTriggerReadFile = () => {
        if (fileInput.current) {
            fileInput.current.click();
        }
    };

    const handleReadFile = (fileObj: File) => {
        if (fileObj) {
            setFileName(fileObj.name);
            fileObj.arrayBuffer().then((buffer) => {
                const workbook = XLSX.read(buffer, { type: 'buffer', bookVBA: true });
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];
                const data = XLSX.utils.sheet_to_json(worksheet, {
                    header: ["company_name","destination_name","mail_address"], // カスタムキーを指定
                    defval: '', // 空のセルにデフォルト値を設定
                  });
                setExcelData(data as excelData[]);
                // setExcelData(data);
            });
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const file = e.currentTarget.files?.[0];
        if (file) {
            handleReadFile(file);
        } else {
            console.error('No file selected');
        }
    };

    const handleBpCreate = () => {
        const alreadySubmitAddress: string[] = []
        if (excelData.length) {
            excelData.map(async (row) => {
                if (bps.find((item) => item.address === row.mail_address)) {
                    alreadySubmitAddress.push(row.mail_address)
                } else {
                    try {
                        await client.graphql({
                            query: createMailTo, variables: {
                                input: {
                                    company: row.company_name,
                                    name: row.destination_name,
                                    address: row.mail_address,
                                }
                            }
                        })
                    } catch (error) {
                        console.log(error)
                    }
                }
            })
            alert("BPを登録しました。")
            if(alreadySubmitAddress.length > 0){
                alert("下記のアドレスは登録済みのため登録されませんでした：" + JSON.stringify(alreadySubmitAddress))
            }
        } else {
            alert("ファイルが空です");
        }
    };

    const downloadExcel = () => {
        const data = [
            ['会社名', '宛先名', 'アドレス']
        ];

        const sheet = utils.aoa_to_sheet(data);
        const book = utils.book_new();
        const sheetName = 'パートナー用メーリングリスト';
        utils.book_append_sheet(book, sheet, sheetName);
        const buffer: Uint8Array = write(book, { type: 'array' });
        const blob = new Blob([buffer], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        });
        const fileName = 'BpList';
        // saveAs(blob, fileName);
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', fileName);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
    };

    return (
        <div style={{ padding: '20px' }}>
            <p style={{ fontWeight: 'bold' }    }>Excelファイルをアップロードする</p>
            <p>
                登録用Excelファイルのダウンロード⇒<button onClick={downloadExcel}>Download</button>
            </p>
            <p style={{ paddingBottom: '20px' }}>
                （2行目から会社名・宛先名・メールアドレスを記入してください）
            </p>
            <button onClick={handleTriggerReadFile}>Excelファイルをアップロード</button>
            {!!fileName && <span>ファイル名：{fileName}</span>}
            <form style={{ display: 'none' }}>
                <input
                    type="file"
                    accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                    ref={fileInput}
                    onChange={handleFileChange}
                />
            </form>
            {!!excelData && (
                <div
                    style={{
                        border: 'solid 1px #444',
                        margin: '10px 0',
                        padding: '10px',
                    }}
                >
                    {excelData.map((row, key) => (
                        <div key={key}>{row.company_name},{row.destination_name},{row.mail_address}</div>
                    ))}
                </div>
            )}
            <button onClick={handleBpCreate}>BP登録</button>
        </div>
    );
};

export default MailXlsx;
