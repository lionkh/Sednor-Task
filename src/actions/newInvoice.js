export default function newInvoice(invoice){
    return{
        type: 'ADD_INVOICE',
        id: invoice.id,
        customer_id: invoice.customer_id,
        discount: invoice.discount,
        total: invoice.total

    }
} 
