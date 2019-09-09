<template>
    <div class="orderPrice_wrap">
        <el-form ref="form" label-position="labelPosition" label-width="100px">
            <el-col :span="12">
                <el-form-item label="询价方:" required >
                    <el-input></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                 <el-form-item label="联系人:">
                    <el-input></el-input>
                </el-form-item>
            </el-col>
              <el-col :span="12">
                <el-form-item label="联系电话：">
                    <el-input></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                 <el-form-item label="电子邮箱：">
                    <el-input></el-input>
                </el-form-item>
            </el-col>
            <el-row style="margin-bottom: 20px;">
                <el-col :span="12">
                    <el-form-item label="订单标题：" required >
                        <el-input></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-col :span="12">
                <el-form-item label="报价人:">
                    <el-input></el-input>
                </el-form-item>
            </el-col>
              <el-col :span="12">
                <el-form-item label="审核人:">
                    <el-input></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="报价人电话:">
                    <el-input></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="报价日期:">
                    <el-input></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                 <el-form-item label="报价人邮箱:">
                    <el-input></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="报价有效期:">
                    <el-input></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="24">
                <el-form-item label="备注:">
                    <el-input 
                     type="textarea"
                     :rows="4"
                     resize="none"
                     ></el-input>
                </el-form-item>
            </el-col>
        </el-form>
        <div class="table_wrap">
            <el-col :span="24">
                <el-table></el-table>
            </el-col>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OrderPrice',
    data (){
        return {
            labelPosition: 'right'
        }
    }
}
</script>

<style lang="less">
.orderPrice_wrap {
    width: 70%;
    height: 700px;
    margin: 100px 0px 0px 200px;

}
</style>