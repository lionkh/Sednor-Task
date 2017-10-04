export default function invoiceItem(item){
        return  {
                type: 'ADD_ITEM',
                id: item.id,
                invoice_id: item.invoice_id,
                product_id: item.id,
                quantity: item.quantity
            };
     }