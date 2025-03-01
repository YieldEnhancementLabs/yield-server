module.exports = [
    {
      inputs: [
        { internalType: 'contract IFluidLendingFactory', name: 'lendingFactory_', type: 'address' },
        { internalType: 'contract IFluidLiquidityResolver', name: 'liquidityResolver_', type: 'address' },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    { inputs: [], name: 'FluidLendingResolver__AddressZero', type: 'error' },
    {
      inputs: [],
      name: 'LENDING_FACTORY',
      outputs: [{ internalType: 'contract IFluidLendingFactory', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'LIQUIDITY_RESOLVER',
      outputs: [{ internalType: 'contract IFluidLiquidityResolver', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'asset_', type: 'address' },
        { internalType: 'string', name: 'fTokenType_', type: 'string' },
      ],
      name: 'computeFToken',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getAllFTokenTypes',
      outputs: [{ internalType: 'string[]', name: '', type: 'string[]' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getAllFTokens',
      outputs: [{ internalType: 'address[]', name: '', type: 'address[]' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'contract IFToken', name: 'fToken_', type: 'address' }],
      name: 'getFTokenDetails',
      outputs: [
        {
          components: [
            { internalType: 'address', name: 'tokenAddress', type: 'address' },
            { internalType: 'bool', name: 'eip2612Deposits', type: 'bool' },
            { internalType: 'bool', name: 'isNativeUnderlying', type: 'bool' },
            { internalType: 'string', name: 'name', type: 'string' },
            { internalType: 'string', name: 'symbol', type: 'string' },
            { internalType: 'uint256', name: 'decimals', type: 'uint256' },
            { internalType: 'address', name: 'asset', type: 'address' },
            { internalType: 'uint256', name: 'totalAssets', type: 'uint256' },
            { internalType: 'uint256', name: 'totalSupply', type: 'uint256' },
            { internalType: 'uint256', name: 'convertToShares', type: 'uint256' },
            { internalType: 'uint256', name: 'convertToAssets', type: 'uint256' },
            { internalType: 'uint256', name: 'rewardsRate', type: 'uint256' },
            { internalType: 'uint256', name: 'supplyRate', type: 'uint256' },
            { internalType: 'int256', name: 'rebalanceDifference', type: 'int256' },
            {
              components: [
                { internalType: 'bool', name: 'modeWithInterest', type: 'bool' },
                { internalType: 'uint256', name: 'supply', type: 'uint256' },
                { internalType: 'uint256', name: 'withdrawalLimit', type: 'uint256' },
                { internalType: 'uint256', name: 'lastUpdateTimestamp', type: 'uint256' },
                { internalType: 'uint256', name: 'expandPercent', type: 'uint256' },
                { internalType: 'uint256', name: 'expandDuration', type: 'uint256' },
                { internalType: 'uint256', name: 'baseWithdrawalLimit', type: 'uint256' },
                { internalType: 'uint256', name: 'withdrawableUntilLimit', type: 'uint256' },
                { internalType: 'uint256', name: 'withdrawable', type: 'uint256' },
              ],
              internalType: 'struct Structs.UserSupplyData',
              name: 'liquidityUserSupplyData',
              type: 'tuple',
            },
          ],
          internalType: 'struct Structs.FTokenDetails',
          name: 'fTokenDetails_',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'contract IFToken', name: 'fToken_', type: 'address' }],
      name: 'getFTokenInternalData',
      outputs: [
        { internalType: 'contract IFluidLiquidity', name: 'liquidity_', type: 'address' },
        { internalType: 'contract IFluidLendingFactory', name: 'lendingFactory_', type: 'address' },
        { internalType: 'contract IFluidLendingRewardsRateModel', name: 'lendingRewardsRateModel_', type: 'address' },
        { internalType: 'contract IAllowanceTransfer', name: 'permit2_', type: 'address' },
        { internalType: 'address', name: 'rebalancer_', type: 'address' },
        { internalType: 'bool', name: 'rewardsActive_', type: 'bool' },
        { internalType: 'uint256', name: 'liquidityBalance_', type: 'uint256' },
        { internalType: 'uint256', name: 'liquidityExchangePrice_', type: 'uint256' },
        { internalType: 'uint256', name: 'tokenExchangePrice_', type: 'uint256' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'contract IFToken', name: 'fToken_', type: 'address' }],
      name: 'getFTokenRewards',
      outputs: [
        { internalType: 'contract IFluidLendingRewardsRateModel', name: 'rewardsRateModel_', type: 'address' },
        { internalType: 'uint256', name: 'rewardsRate_', type: 'uint256' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'contract IFToken', name: 'fToken_', type: 'address' }],
      name: 'getFTokenRewardsRateModelConfig',
      outputs: [
        { internalType: 'uint256', name: 'duration_', type: 'uint256' },
        { internalType: 'uint256', name: 'startTime_', type: 'uint256' },
        { internalType: 'uint256', name: 'endTime_', type: 'uint256' },
        { internalType: 'uint256', name: 'startTvl_', type: 'uint256' },
        { internalType: 'uint256', name: 'maxRate_', type: 'uint256' },
        { internalType: 'uint256', name: 'rewardAmount_', type: 'uint256' },
        { internalType: 'address', name: 'initiator_', type: 'address' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getFTokensEntireData',
      outputs: [
        {
          components: [
            { internalType: 'address', name: 'tokenAddress', type: 'address' },
            { internalType: 'bool', name: 'eip2612Deposits', type: 'bool' },
            { internalType: 'bool', name: 'isNativeUnderlying', type: 'bool' },
            { internalType: 'string', name: 'name', type: 'string' },
            { internalType: 'string', name: 'symbol', type: 'string' },
            { internalType: 'uint256', name: 'decimals', type: 'uint256' },
            { internalType: 'address', name: 'asset', type: 'address' },
            { internalType: 'uint256', name: 'totalAssets', type: 'uint256' },
            { internalType: 'uint256', name: 'totalSupply', type: 'uint256' },
            { internalType: 'uint256', name: 'convertToShares', type: 'uint256' },
            { internalType: 'uint256', name: 'convertToAssets', type: 'uint256' },
            { internalType: 'uint256', name: 'rewardsRate', type: 'uint256' },
            { internalType: 'uint256', name: 'supplyRate', type: 'uint256' },
            { internalType: 'int256', name: 'rebalanceDifference', type: 'int256' },
            {
              components: [
                { internalType: 'bool', name: 'modeWithInterest', type: 'bool' },
                { internalType: 'uint256', name: 'supply', type: 'uint256' },
                { internalType: 'uint256', name: 'withdrawalLimit', type: 'uint256' },
                { internalType: 'uint256', name: 'lastUpdateTimestamp', type: 'uint256' },
                { internalType: 'uint256', name: 'expandPercent', type: 'uint256' },
                { internalType: 'uint256', name: 'expandDuration', type: 'uint256' },
                { internalType: 'uint256', name: 'baseWithdrawalLimit', type: 'uint256' },
                { internalType: 'uint256', name: 'withdrawableUntilLimit', type: 'uint256' },
                { internalType: 'uint256', name: 'withdrawable', type: 'uint256' },
              ],
              internalType: 'struct Structs.UserSupplyData',
              name: 'liquidityUserSupplyData',
              type: 'tuple',
            },
          ],
          internalType: 'struct Structs.FTokenDetails[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'contract IFToken', name: 'fToken_', type: 'address' },
        { internalType: 'uint256', name: 'assets_', type: 'uint256' },
        { internalType: 'uint256', name: 'shares_', type: 'uint256' },
      ],
      name: 'getPreviews',
      outputs: [
        { internalType: 'uint256', name: 'previewDeposit_', type: 'uint256' },
        { internalType: 'uint256', name: 'previewMint_', type: 'uint256' },
        { internalType: 'uint256', name: 'previewWithdraw_', type: 'uint256' },
        { internalType: 'uint256', name: 'previewRedeem_', type: 'uint256' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'contract IFToken', name: 'fToken_', type: 'address' },
        { internalType: 'address', name: 'user_', type: 'address' },
      ],
      name: 'getUserPosition',
      outputs: [
        {
          components: [
            { internalType: 'uint256', name: 'fTokenShares', type: 'uint256' },
            { internalType: 'uint256', name: 'underlyingAssets', type: 'uint256' },
            { internalType: 'uint256', name: 'underlyingBalance', type: 'uint256' },
            { internalType: 'uint256', name: 'allowance', type: 'uint256' },
          ],
          internalType: 'struct Structs.UserPosition',
          name: 'userPosition',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'user_', type: 'address' }],
      name: 'getUserPositions',
      outputs: [
        {
          components: [
            {
              components: [
                { internalType: 'address', name: 'tokenAddress', type: 'address' },
                { internalType: 'bool', name: 'eip2612Deposits', type: 'bool' },
                { internalType: 'bool', name: 'isNativeUnderlying', type: 'bool' },
                { internalType: 'string', name: 'name', type: 'string' },
                { internalType: 'string', name: 'symbol', type: 'string' },
                { internalType: 'uint256', name: 'decimals', type: 'uint256' },
                { internalType: 'address', name: 'asset', type: 'address' },
                { internalType: 'uint256', name: 'totalAssets', type: 'uint256' },
                { internalType: 'uint256', name: 'totalSupply', type: 'uint256' },
                { internalType: 'uint256', name: 'convertToShares', type: 'uint256' },
                { internalType: 'uint256', name: 'convertToAssets', type: 'uint256' },
                { internalType: 'uint256', name: 'rewardsRate', type: 'uint256' },
                { internalType: 'uint256', name: 'supplyRate', type: 'uint256' },
                { internalType: 'int256', name: 'rebalanceDifference', type: 'int256' },
                {
                  components: [
                    { internalType: 'bool', name: 'modeWithInterest', type: 'bool' },
                    { internalType: 'uint256', name: 'supply', type: 'uint256' },
                    { internalType: 'uint256', name: 'withdrawalLimit', type: 'uint256' },
                    { internalType: 'uint256', name: 'lastUpdateTimestamp', type: 'uint256' },
                    { internalType: 'uint256', name: 'expandPercent', type: 'uint256' },
                    { internalType: 'uint256', name: 'expandDuration', type: 'uint256' },
                    { internalType: 'uint256', name: 'baseWithdrawalLimit', type: 'uint256' },
                    { internalType: 'uint256', name: 'withdrawableUntilLimit', type: 'uint256' },
                    { internalType: 'uint256', name: 'withdrawable', type: 'uint256' },
                  ],
                  internalType: 'struct Structs.UserSupplyData',
                  name: 'liquidityUserSupplyData',
                  type: 'tuple',
                },
              ],
              internalType: 'struct Structs.FTokenDetails',
              name: 'fTokenDetails',
              type: 'tuple',
            },
            {
              components: [
                { internalType: 'uint256', name: 'fTokenShares', type: 'uint256' },
                { internalType: 'uint256', name: 'underlyingAssets', type: 'uint256' },
                { internalType: 'uint256', name: 'underlyingBalance', type: 'uint256' },
                { internalType: 'uint256', name: 'allowance', type: 'uint256' },
              ],
              internalType: 'struct Structs.UserPosition',
              name: 'userPosition',
              type: 'tuple',
            },
          ],
          internalType: 'struct Structs.FTokenDetailsUserPosition[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'auth_', type: 'address' }],
      name: 'isLendingFactoryAuth',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'deployer_', type: 'address' }],
      name: 'isLendingFactoryDeployer',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function',
    },
  ]
  