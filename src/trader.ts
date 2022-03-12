import { OceanPool, Pool } from "./balancer";
import { DataTokens } from "./Datatokens";
import { Logger } from "./utils";
import { TransactionReceipt } from "web3-core";
import { AbiItem } from "web3-utils/types";
import { default as DataxRouter } from "./abi/DataxRouter.json";
import datatokensABI from "@oceanprotocol/contracts/artifacts/DataTokenTemplate.json";
import poolABI from "@oceanprotocol/contracts/artifacts/BPool.json";
import BFactoryABI from "@oceanprotocol/contracts/artifacts/BFactory.json";
import Decimal from "decimal.js";
import BigNumber from "bignumber.js";
import DTFactoryABI from "@oceanprotocol/contracts/artifacts/DTFactory.json";
import Base from "./Base";

export default class Trader extends Base {
    constructor(web3:any,network:any){
        super(web3, network)
    }
    /**
         * get current version  number for the contract
         * @returns string
     */
    public async getCurrentVersion(){}
    
    /**
        * get the constant fees being transferred to the collector after the swap.
        * @returns string 
     */
    public async getSwapFees(){}
    
    /**
        * @params account
        * @params dtAmountWanted
        * @params maxEthAmount
        * @params path
        * @params refFees
        * @params refAddress
        * @params deadline
        * @params slippage  
        * @returns 
     */
    public async swapETHforExactDatatokens(
        account: string,
        dtAmountWanted: string,
        maxEthAmount: string,
        path: string[],
        refFees: string,
        refAddress: string,
        deadline: string,
        slippage: string
    ){}

    /**
        * @params account
        * @params dtAmountWanted
        * @params path
        * @params refFees
        * @params refAddress
        * @params deadline
        * @params slippage  
        * @returns 
     */
    public async swapExactETHforDataTokens(
        account: string,
        minimumDtAmountWanted: string,
        path: string[],
        refFees: string,
        refAddress: string,
        deadline: string,
        slippage: string
    ){}
    /**
        * @params account
        * @params dtAmount
        * @params minimumETHAmountWanted
        * @params path
        * @params refFees
        * @params refAddress
        * @params deadline
        * @params slippage  
        * @returns  
     */
    public async swapExactDatatokensforETH(
        account: string,
        dtAmount: string,
        minimumETHAmountWanted: string,
        path: string[],
        refFees: string,
        refAddress: string,
        deadline: string,
        slippage: string
    ){}
    /**
        * @params account
        * @params maxTokenAmount
        * @params dtAmountWanted
        * @params path
        * @params refFees
        * @params refAddress
        * @params deadline
        * @params slippage  
        * @returns  
     */

    public async swapTokensforExactDatatokens(
        account: string,
        maxTokenAmount: string,
        dtAmountWanted: string,
        path: string[],
        refFees: string,
        refAddress: string,
        deadline: string,
        slippage: string
    ){}
    /**
         * Swaps exact no. of datatokens to Ocean tokens
         * @param account
         * @param tokenAmount
         * @param minimumdtAmountWanted
         * @param path
         * @param refFees
         * @param refAddress
         * @param deadline
         * @param slippage
         * @returns
    */
    public async swapExactTokensforDataTokens(
        account: string,
        tokenAmount: string,
        minimumdtAmountWanted: string,
        refFees: string,
        refAddress: string,
        deadline: string,
        slippage: string
    ){}
    /**
         * Swaps exact no. of datatokens to Ocean tokens
         * @param account
         * @param dtAmount
         * @param minimumDtAmountWanted
         * @param path
         * @param refFees
         * @param refAddress
         * @param deadline
         * @param slippage
         * @returns
    */
    public async swapExactDatatokensforDatatokens(
        account: string,
        dtAmount: string,
        minimumDtAmountWanted: string,
        refFees: string,
        refAddress: string,
        deadline: string,
        slippage: string
    ){}
    /**
         * Swaps exact no. of datatokens to Ocean tokens
         * @param account
         * @param maxdtAmount
         * @param dtAmountWanted
         * @param path
         * @param refFees
         * @param refAddress
         * @param deadline
         * @param slippage
         * @returns
    */
    public async swapDatatokensforExactDatatokens(){}


/*
    - ETH <-> Datatokens
        - swapETHforExactDatatokens 
        - swapExactETHforDataTokens
    - Tokens <-> Datatokens
        - swapTokensforExactDatatokens
        - swapExactTokensforDatatokens
    - Datatokens <-> Datatokens
        - swapExactDatatokensforDatatokens
        - swapDatatokensforExactDatatokens
*/