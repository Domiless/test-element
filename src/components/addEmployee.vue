<template>
    <div class="addEmployee_wrap">
        <el-row>
            <el-button @click="$router.back(-1)" icon="el-icon-arrow-left">返回</el-button>
        </el-row>
        <el-row>
            <div class="content_case">
                <el-form ref="form" :model="employee" :label-position="labelPosition">
                    <el-form-item label="姓名:" required :label-width="formLabelWidth">
                        <el-input v-model="employee.name" :label-width="formLabelWidth"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号码:" required :label-width="formLabelWidth">
                        <el-input v-model="employee.phoneNumber"></el-input>
                    </el-form-item>
                    <el-form-item label="初始密码:" required :label-width="formLabelWidth">
                        <el-input v-model="employee.initPassword" placeholder="6~20个字符组成，区分大小写"></el-input>
                    </el-form-item>
                    <el-form-item label="所处班组:" required :label-width="formLabelWidth">
                        <el-input v-model="employee.team" placeholder="请选择"></el-input>
                    </el-form-item>
                    <el-form-item label="分配角色:" required :label-width="formLabelWidth">
                        <el-input v-model="employee.role" placeholder="请选择"></el-input>
                    </el-form-item>
                    <el-form-item label="工种:" required :label-width="formLabelWidth">
                        <el-input v-model="employee.job" placeholder="请选择"></el-input>
                    </el-form-item>
                    <el-form-item label="年龄:" :label-width="formLabelWidth">
                        <el-input v-model="employee.age"></el-input>
                    </el-form-item>
                    <el-form-item label="性别:" :label-width="formLabelWidth">
                        <el-radio v-model="radio" label="man">男</el-radio>
                        <el-radio v-model="radio" label="woman">女</el-radio>
                    </el-form-item>
                    <el-form-item label="入职时间:" :label-width="formLabelWidth">
                        <div class="join_time_wrap">
                            <el-date-picker v-model="time_value" type="date" placeholder="请选择日期"></el-date-picker>
                        </div>
                    </el-form-item>
                    <el-form-item label="以往工作年限:" :label-width="formLabelWidth">
                        <el-input v-model="employee.work_time"></el-input>
                    </el-form-item>
                    <el-form-item label="附件简历:" :label-width="formLabelWidth">
                        <el-upload
                            class="upload-demo"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            multiple
                            :limit="1"
                        >
                            <el-button size="small" icon="el-icon-upload2">点击上传</el-button>
                        </el-upload>
                    </el-form-item>
                    <el-form-item :label-width="formLabelWidth">
                        <el-button type="primary">提交</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'addEmployee',
    data (){
        return {
            employee: {
                name: '',
                phoneNumber: '',
                initPassword: '',
                team: '',
                role: '',
                job: '',
                age: '',
                sex: '',
                join_time: '',
                work_time: ''
            },
            formLabelWidth: '100px',
            labelPosition: 'right',
            radio: 'man',
            time_value: ''
        }
    },
    
}
</script>

<style lang="less">
*{
    margin: 0px;
    padding: 0px;
    list-style: none;
}
.addEmployee_wrap {
    padding: 50px 0px 0px 100px;
    // border: 1px solid black;
    .content_case {
        margin: 50px 0px 0px 50px;
        .el-input__inner {
            height: 30px;
        }
        // .el-form-item__content {
        //     display: inline-block;
        //     width: 778px;
        // }
    }
}
.el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 100%;
}
</style>